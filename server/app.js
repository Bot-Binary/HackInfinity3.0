const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const  passwordverify = require("./middleware/auth")
require("mongoose-unique-array");

// files
require("./db/conn");

// DB models 
const junior = require("./models/junior");
// const junior = xxx.junior;
// const senior = require("./models/senior");
const senior = require("./models/senior");
const shop = require("./models/shop");
const history = require("./models/history");

// middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: "http://localhost:3000"
}))


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.post("/signup", async (req, res) => {
    try {
        const register = req.body;
        // console.log(register);

        const type = register.usertype;

        if (type == "child") {
            console.log("SSS");
            const final = new junior({

                name: register.name,
                email: register.email,
                phone: register.phone,
                password: register.password,
                payid: `${register.phone}@bot`

            })

            const save = await final.save()
                .then(() => {
                    res.send(final);
                }).catch((e) => {
                    // console.log("DDD");
                    if (e.keyPattern.phone === 1) {
                        res.send("PHONE");
                    }
                    if (e.keyPattern.email === 1) {
                        res.send("EMAIL");
                    }
                });

        }
        if (type == "parent") {
            console.log("XXX");

            const final = new senior({

                name: register.name,
                email: register.email,
                phone: register.phone,
                password: register.password,
                payid: `${register.name}@bot`
            })

            const save = await final.save()
                .then(() => {
                    res.send(final);
                }).catch((e) => {
                    // console.log("DDD");
                    if (e.keyPattern.phone === 1) {
                        res.send("PHONE");
                    }
                    if (e.keyPattern.email === 1) {
                        res.send("EMAIL");
                    }
                });
            // res.send(register);
        }


    } catch {
        (err) => {
            console.log("CAN'T SAVE THE ERROR IS " + err);
        }
    }
}
)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const type = req.body.usertype;

        // const match1 = await data.findOne({email:email});

        console.log("ARRIVED");

        if (type == "child") {
            console.log("XXXX");
            const match = await junior.findOne({ email: email });

            if (match) {

                const result = await bcrypt.compare(password, match.password);

                if (result) {
                    res.send(match);
                }
                else {
                    res.send("WRONG");
                }

            }
            else {
                res.send("NOTEXIST");
            }



        }

        if (type == "parent") {

            console.log("RRRR");
            const match = await senior.findOne({ email: email });

            if (match) {

                const result = await bcrypt.compare(password, match.password);

                if (result) {
                    res.send(match);
                }
                else {
                    res.send("WRONG");
                }

            }
            else {
                res.send("NOTEXIST");
            }
        }

    } catch {
        (err) => {
            console.log(err);
        }
    }
})



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.post("/addchild", async (req, res) => {

    try {
        const data = req.body;
        // console.log("DDDDDDDDDD");
        const sid = data.sid;
        // const spass = data.spassword;
        const jid = data.jid;
        const jpass = data.jpassword;
        const matchs = await senior.findOne({ email: sid });
        const matchj = await junior.findOne({ email: jid });

        console.log(matchs);
        console.log(matchj);

        if (matchs && matchj) {
            console.log("AAA");

            // const result1 = await bcrypt.compare(spass, matchs.password);
            const result2 = await bcrypt.compare(jpass, matchj.password);

            if (result2) {
                console.log("es");
                const j_id = matchj._id;

                const result = await senior.updateOne({ email: sid }, { $addToSet:{ children:{id :j_id , name :matchj.name, balance : matchj.balance }}});
                const abc = await junior.updateOne({email:jid},{$set:{pid:sid}});
                console.log(result);
                res.send("DONE");

            }
            else {
                res.send("EMPTY");
            }
        }
        else {
            res.send("EMPTY");
        }
    }
    catch {
        (err) => {
            console.log("THIS ERR FROM ADD CHILD TO PARENT PART");
            console.log(err);
        }
    }

})


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post("/dropchild", async (req, res) => {

    try {
        const data = req.body;

        const sid = data.sid;
        // const spass = data.spassword;
        const jid = data.jid;
        const jpass = data.jpassword;
        const matchs = await senior.findOne({ email: sid });
        const matchj = await junior.findOne({ email: jid });

        console.log(matchs);
        console.log(matchj);

        if (matchs && matchj) {
            console.log("AAA");

            // const result1 = await bcrypt.compare(spass, matchs.password);
            const result2 = await bcrypt.compare(jpass, matchj.password);

            if (result2) {
                const j_id = matchj._id;
                console.log("es");

                const result = await senior.updateOne({ email: sid }, { $pull:{ children:{id :j_id , name :matchj.name, balance : matchj.balance }}});
                console.log(result);
                res.send("DONE");
            }
            else {
                res.send("EMPTY");
            }
        }
        else {
            res.send("EMPTY");
        }
    }
    catch {
        (err) => {
            console.log("THIS ERR FROM ADD CHILD TO PARENT PART");
            console.log(err);
        }
    }

})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.post("/add/type",async(req,res)=>{
    try{
        const data = req.body;

        const senior_pass = data.senior_password;
        const junior_id = data.junior_id;
        const senior_id = data.senior_id;
        const category = data.category;
        
        const match = await senior.findOne({email:senior_id});

        const match1 = await junior.findOne({email:junior_id});
 
        const result1 = await bcrypt.compare(senior_pass, match.password);


        if(result1 && match1){

            const result = await junior.updateOne({ email: junior_id },{ $addToSet : { allowed:{ id : category}}});

            res.send("DONE");


        }
        else{
            res.send("WRONG");
        }

    }
    catch{(err)=>{

    }}
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.post("/drop/type",async(req,res)=>{
    try{
        const data = req.body;

        const senior_pass = data.senior_password;
        const junior_id = data.junior_id;
        const senior_id = data.senior_id;
        const category = data.category;

        const match1 = await senior.findOne({email:senior_id});
        const match2 = await junior.findOne({email:junior_id});

        const result1 = await bcrypt.compare(senior_pass, match1.password);

        if(result1 && match2){

            const match_junior = await junior.findOne({email:junior_id});

            const res = await junior.updateOne({ email: junior_id },{ $pull : { allowed:{ id : category}}});
            
            console.log("err");
      
            res.send("DONE");

        }
        else{
            red.send("WRONG");
        }

    }
    catch{(err)=>{

    }}
})



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.post("/pay",async (req,res)=>{
    try{

        const data = req.body;
        

        const pass = data.password;
        const junior_id = data.juniorid;
        const category = data.category;
        const senior = data.seniorid;
        const amount = data.amount;
        console.log("XXX");
        const matchj = await junior.findOne({email:junior_id});
        const matchs = matchj.pid;
        // const match_password = await junior.findOne({email:junior_id});
        // console.log(match);
        if(match){
            const match_password = await junior.findOne({email:junior_id});

            if(match_password){
                const all_cat = match.allowed;
                const result = all_cat.filter(obj => {
                    return obj.id === category
                })
                if(result){
                    if(amount<=matchj.balance){
                        matchj.balance = matchj.balance - amount;

                    }
                    else{
                        res.send("INSUFFICIENT");
                    }
                }
                else{
                    // EMAIL TO PARENT>>>>>>>>>>>>>>>>>>>
                }
            }
            else{
                res.send("WRONG");
            }






            const all_cat = match.allowed;
            console.log(all_cat);
            console.log("AAAAAAAAAA");
            
            

            // console.log(result);

            if(result){




                console.log("DDDJJJ");
            }
            else{
                console.log("fff");
                console.log(iS_in);
            }
        }
        else{
            res.send("NOTMATCHING");
        }


    }catch{(e)=>{

    }}
})
















// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.get("/history", async (req, res) => {
    try{
        console.log(req);
        const data = req.body;
        console.log(data);
        const junior = data.junior_id;
        console.log(junior);
        
        const result = await history.find({from : junior});

        console.log(result);
        res.send(result);

    }catch{(err)=>{
        console.log("THIS ERROR FROM GETTING HISTORY PART");
        console.log(err);
        res.send("ERROR");
    }}
})


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.get("/junior",async (req,res)=>{
    try{

        const mail = req.body.email;

        const match = await junior.findOne({email:mail});
        
        res.send(match);

    }
    catch{(err)=>{
        console.log("THIS ERROR ID FROM INDIVIDUAL GET DATA REQUEST JUNIOR");
    }}
})




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.get("/senior",async (req,res)=>{
    try{

        const mail = req.body.email;

        const match = await senior.findOne({email:mail});
        
        res.send(match);

    }
    catch{(err)=>{
        console.log("THIS ERROR ID FROM INDIVIDUAL GET DATA REQUEST SENIOR");
    }}
})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const passwordverify = async (req,res,next) => {
//     // app.get("/junior/auth",async (req,res)=>{
//     //     try{
//             const data = req.data;

//             const email = data.email;
//             const pass = data.pass;

//             const match = await senior.findOne({email:email});

//             const result = await bcrypt.compare(pass, match.password);
//             if(result){
//                 next();
//             }

//         // }
//         // catch{(err)=>{
//         //     console.log("EEEEEEEEEE");
//         // }}
//     // })
    
// }






app.listen(8000, () => {
    console.log("Listening on 8000");
})

