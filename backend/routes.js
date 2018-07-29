const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./users');
const axios = require('axios');
const secret = process.argv[2];

router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

        User.find({})
            .then((results) =>
                {
        console.log(results);
            })
            .catch((error) =>
            {
            console.log(error); 
            });

            router.post('http://localhost:8080/validtoken', (req, res)=>{
                jwt.verify(req.body.jwt, secret, (error, payload)=>{
                    if(!error){
                        res.json({error: false, alias: payload.alias});
                    }
                    else{
                        res.json({error: true});
                    }
                });
            });
            router.post('http://localhost:8080/register', (req, res)=>{
                if(typeof req.body.username === "string" && typeof req.body.password == "string"){
                    if(req.body.username && req.body.password){
                        if(req.body.username.trim() && req.body.username.trim().length <= 15){
                            User.findOne({username: req.body.username.trim().toLowerCase()})
                                .then((result)=>{
                                    if(result){
                                        res.json({error:true, reason: "username is taken."});
                                    }
                                    else{
                                        const newUser = new User({
                                            username : req.body.username.trim().toLowerCase(),
                                            password : bcrypt.hashSync(req.body.password, 10),
                                            alias: req.body.username.trim()
                                        });
                                        newUser.save()
                                        .then((results)=>{
                                            console.log("Successfully added " + results.alias);
                                            const user = {
                                                _id: results._id,
                                                alias: results.alias,
                                                timestamp: Date.now()
                                            };
                                            jwt.sign(user, secret , {expiresIn: "4h"}, (error, jwt)=>{
                                                if(!error){
                                                    res.json({error: false, jwt:jwt});
                                                }
                                                else{
                                                    res.json({error: true})
                                                }
                                            });
                                        })
                                        .catch((error) =>
                                        {
                                            console.log(error);
                                        });
                                    }
                                })
                                .catch((error)=>{
                                    res.json({error: true});
                                });
                            }
                            else
                            {
                                res.json({error: true, reason: "Please choose a valid username."});
                            }
                        }
                        else{ 
                            res.json({error: true, reason: "All fields must be filled out."});
                        }
                    }
                    else { 
                        res.json({error: true});
                    }
                });

        router.post('http://localhost:8080/login',(req, res)=>{
            if(typeof req.body.userName ==='string' && typeof req.body.password === 'string'){
                User.findOne({username: req.body.userName.toLowerCase()})
                    .then((result)=>{
                        if(result){
                            if(bcrypt.compareSync(req.body.password, result.password)){
                                const user ={
                                    _id: result._id,
                                    alias: result.alias,
                                    timeStamp: Date.now()
                                    }
                                    jwt.sign(user, secret, {expiresIn: '4h'} , (error, jwt)=>{
                                        if(!error){
                                            res.json({error:false, jwt: jwt})
                                        }
                                        else {
                                            res.json({error:true});
                                        }
                                    })
                            }
                            else{
                                res.json({error:true})
                            }
                        }
                        else {
                            console.log("not found");
                            res.json({error: true});
                        }
                    })
                    .catch((error)=>{
                        res.json({error:true});  
                    });
            }
            else {
                res.json({error: true});
            }
        });

module.exports = router;