const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const  passwordverify = require("./middleware/auth")

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

        const sid = data.sid;
        const spass = data.spassword;
        const jid = data.jid;
        const jpass = data.jpassword;
        const matchs = await senior.findOne({ email: sid });
        const matchj = await junior.findOne({ email: jid });

        console.log(matchs);
        console.log(matchj);

        if (matchs && matchj) {
            // console.log("AAA");

            const result1 = await bcrypt.compare(spass, matchs.password);
            const result2 = await bcrypt.compare(jpass, matchj.password);

            if (result1 && result2) {
                const j_id = matchj._id;
                // console.log("es");

                const res = await senior.updateOne({ email: sid }, { $push: { children: j_id } });
                console.log(res);

            }
            else {
                res.send("WRONG");
            }
        }
        else {
            res.send("WRONG");
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
        const  senior_pass = data.senior_password;

        const junior_id = data.junior_id;
        const senior_id = data.senior_id;
        const type = data.category;

        const match = await senior.findOne({email:senior_id});

        const result1 = await bcrypt.compare(senior_pass, match.password);

        if(result1){

            const match_junior = await junior.findOne({email:junior_id});

            const res = await junior.updateOne({ email: junior_id }, { $push: { category: type } });

            console.log(res);

        }
        else{
            red.send("WRONG");
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
        const type = data.category;

        const match = await senior.findOne({email:senior_id});

        const result1 = await bcrypt.compare(senior_pass, match.password);

        if(result1){

            const match_junior = await junior.findOne({email:junior_id});

            const res = await junior.updateOne({ email: junior_id }, { $pull: { category: type } });

            console.log(res);

        }
        else{
            red.send("WRONG");
        }

    }
    catch{(err)=>{

    }}
})





















// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.get("/history", async (req, res) => {
    try{



    }catch{(err)=>{
        console.log("THIS ERROR FROM GETTING HISTORY PART");
        console.log(err);
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

