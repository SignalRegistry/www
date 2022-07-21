#!/usr/bin/node

//=============================================================================
// modules
//=============================================================================
const express    = require('express');
var cookieParser = require('cookie-parser')
const assert     = require('assert');
const path       = require("path")
// const cookieParser = require("cookie").parse
const crypto     = require("crypto");
var http         = require('http');
// const htmlMinify = require('html-minifier-terser').minify;
// const fs = require("fs")

//=============================================================================
// database
//=============================================================================
var db, bashlab;
const mongoClient = require("mongodb").MongoClient
const mongoObjectId = require("mongodb").ObjectId;
const mongodbUrl = 'mongodb://127.0.0.1:27017/signalregistry';
mongoClient.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  assert.equal(null, err);
  db = client.db("signalregistry");
  bashlab = client.db("bashlab");
});

//=============================================================================
// nodemailer
//=============================================================================
// const nodemailer = require('nodemailer');
// let mailTransport = nodemailer.createTransport({
//   host: 'mail.huseyinyigit.com.tr',
//   port: 587,
//   auth: {
//     user: 'iletisim@huseyinyigit.com.tr',
//     pass: 'UBlk32X9'
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

//=============================================================================
// http server
//=============================================================================
const app = express();
var server = http.createServer(app);
const port = 3000

//-------------------------------------
// middlewares
//-------------------------------------
// app.use(require('morgan')('tiny'));
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cookieParser())
app.use(require('express-query-parser').queryParser({
  parseNull: true,
  parseUndefined: true,
  parseBoolean: true,
  parseNumber: true
}))

app.use(function (req, res, next) {
  // if (req.headers.cookie) req.headers.cookie = cookieParser(req.headers.cookie)
  // else req.headers.cookie = {}
  // console.log(req.cookies)
  if (req.cookies._sr) {
    //     db.collection("sessions").findOne({ bho: req.headers.cookie.bho }, function (err, doc) {
    //       if (doc) req.user = { username: doc.username, role: doc.role }
    //       if (doc && doc.password) req.user.passowrd = doc.password
    next()
    //     })
  }
  else {
    let cookieId = crypto.randomBytes(16).toString("hex")
    req.cookies._sr = cookieId
    res.cookie('_sr', cookieId, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
    next()
  }
  // console.log(req.cookies)
})

//-------------------------------------
// static file paths
//-------------------------------------
app.use(`/`, express.static(path.join(__dirname, 'html/')))
app.use(`/node_modules`, express.static(path.join(__dirname, 'node_modules/')))
// app.use(`/app/css`, express.static(path.join(__dirname, 'html/css')))
// app.use(`/app/js`, express.static(path.join(__dirname, 'html/js')))
// app.use(`/app/img`, express.static(path.join(__dirname, 'html/img')))
// app.use(`/app/media`, express.static(path.join(__dirname, 'html/media')))
// app.use(`/app/font`, express.static(path.join(__dirname, 'html/font')))

//-------------------------------------
// standart routes
//-------------------------------------
app.get('/programs/', (req, res) => {
  // if ((req.user.role == "customer" && req.query.username) || (req.user.role == "admin" && req.query.username)) null
  // else { req.query.username = req.user.username; req.query.password = req.user.password; }
  // console.log(req.query)
  bashlab.collection("programs").find(req.query).toArray(function (err, docs) {
    res.send(docs)
  });
})

// app.get('/app/', (req, res) => {
//   fs.readFile('html/index.html', (err, data) => {
//     if (err) throw err;
//     if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
//     else res.redirect("/app/login?returnCode=2")
//   });
// })


// /* password card activation */
// app.get('/app/activate', (req, res) => {
//   fs.readFile('html/activate.html', (err, data) => {
//     if (err) throw err;
//     res.send(htmlMinify(`${data}`, minifyOptions))
//   });
// })
// app.get('/app/activate/check', (req, res) => {
//   db.collection("passCards").findOne(req.query, function (err, doc) {
//     if (err) throw err;
//     res.send(doc)
//   })
// })
// app.get('/app/activate/register', (req, res) => {
//   let username = `${req.query.name.toLocaleLowerCase().replace(" ", "")}${String(Math.floor(Math.random() * (1000 - 100)) + 100)}`
//   db.collection("passCards").updateOne({ id: req.query.id }, { $set: { username: username } }, function (err, r) {
//     if (err) throw err;

//     db.collection("users").insertOne({
//       name: req.query.name.split(" ")[0],
//       surname: req.query.name.split(" ")[1],
//       username: username,
//       password: req.query.password,
//       phone: req.query.phone,
//       subscription: "passcard",
//     }, function (err, r) {
//       fs.readFile(`html/passcard_success.html`, (err, data) => {
//         if (err) throw err;
//         else res.send(htmlMinify(`${data}`.replace("#username#", username).replace("#password#", req.query.password).replace("#username#", username).replace("#password#", req.query.password), minifyOptions))
//       });
//     })

//     mongoClient.connect('mongodb://127.0.0.1:27017/baykushafiza', { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
//       client.db("baykushafiza").collection("users").insertOne({
//         name: req.query.name.split(" ")[0],
//         surname: req.query.name.split(" ")[1],
//         username: username,
//         password: req.query.password,
//         phone: req.query.phone,
//         subscription: "passcard",
//       }, function (err, r) {

//       })
//     });
//   })
// })

// app.get('/app/derslerim', (req, res) => {
//   fs.readFile('html/derslerim.html', (err, data) => {
//     if (err) throw err;
//     if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
//     else res.redirect("/app/login?returnCode=2")
//   });
// })

// app.get('/app/modules/:module', (req, res) => {
//   fs.readFile(`html/m${req.params.module}.html`, (err, data) => {
//     if (err) throw err;
//     if (req.user) res.sendFile(__dirname + `/html/m${req.params.module}.html`)
//     // if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
//     else res.redirect("/app/login?returnCode=2")
//   });
// })

// // const demoExercises = [0, [5], [7], [4], [1, 6], [2, 5], [5]]
// // const demoExercises = [0, [4], [2], [1], [5], [8], [3]]
// const demoExercises = [0, [5], [7], [4], [2], [5], [5]]
// app.get('/app/modules/:module/exercises/:exercise', (req, res) => {
//   if (!req.user) res.redirect("/app/login?returnCode=2")
//   else {
//     fs.readFile(`html/m${req.params.module}e${req.params.exercise}.html`, (err, data) => {
//       if (err) throw err;
//       // res.sendFile(__dirname + `/html/m${req.params.module}e${req.params.exercise}.html`)
//       if (req.user.username.includes("misafir")) {
//         if (demoExercises[Number(req.params.module)].includes(Number(req.params.exercise))) {
//           res.send(htmlMinify(`${data}`, minifyOptions))
//         }
//         else res.redirect(`/app/modules/${req.params.module}`)
//       }
//       else res.send(htmlMinify(`${data}`, minifyOptions))
//     });
//   }
// })

// app.get('/app/camp', (req, res) => {
//   fs.readFile(`html/camp.html`, (err, data) => {
//     if (err) throw err;
//     if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
//     else res.redirect("/app/login?returnCode=2")
//   });
// })

// //-------------------------------------
// // authorization
// //-------------------------------------
// app.get('/app/user', (req, res) => {
//   if (req.user) {
//     db.collection("users").findOne({ username: req.user.username }, function (err, doc) {
//       if (doc) {
//         delete doc.password
//         res.send(doc)
//       }
//       else res.redirect("/app/login?returnCode=2")
//     })
//   }
//   else res.redirect("/app/login?returnCode=2")
// })

// app.post('/app/user', (req, res) => {
//   db.collection("users").updateOne({ username: req.user.username }, { $set: req.body }, function (err, r) {
//     if (err) throw err;
//     res.send(r)
//   })
// })

// app.get('/app/login', (req, res) => {
//   if (req.query.username && req.query.password) {
//     if (req.query.username.includes("misafir")) {
//       db.collection("users").insertOne({ username: req.query.username, name: "Misafir", surname: "" }, function (err, doc) {
//         let session = {
//           bho: req.headers.cookie.bho,
//           username: req.query.username,
//           password: req.query.password
//         }
//         db.collection("sessions").update({ username: session.username }, session, { upsert: true }, function (err, r) {
//           if (err) { res.redirect("/app/login?returnCode=0") }
//           else res.redirect("/app/")
//           console.log(`User login: ${session.username}`)
//         })
//       })
//     }
//     else {
//       db.collection("users").findOne(req.query, function (err, doc) {
//         if (doc) {
//           let session = {
//             bho: req.headers.cookie.bho,
//             username: doc.username,
//             role: doc.role
//           }
//           db.collection("sessions").update({ username: session.username }, session, { upsert: true }, function (err, r) {
//             if (err) { res.redirect("/app/login?returnCode=0") }
//             else (session.role == "admin") ? res.redirect("/app/admin") : (session.role == "customer") ? res.redirect("/app/customer") : res.redirect("/app")
//             console.log(`User login: ${session.username}`)
//           })
//         }
//         else res.redirect("/app/login?returnCode=1")
//       })
//     }
//   }
//   else if (!req.user) {
//     res.sendFile(path.join(__dirname, "html/login.html"))
//   }
//   else (req.user.role == "admin") ? res.redirect("/app/admin") : (req.user.role == "customer") ? res.redirect("/app/customer") : res.redirect("/app")
// })

// app.get('/app/logout', (req, res) => {
//   if (!req.user) {
//     res.redirect("/app/login?returnCode=logout")
//   }
//   else {
//     db.collection("sessions").deleteOne({ bho: req.headers.cookie.bho }, function (err, doc) {
//       res.redirect("/app/login?returnCode=logout")
//     })
//   }
// })

// //-------------------------------------
// // statistics
// //-------------------------------------
// app.get('/app/stats/', (req, res) => {
//   if ((req.user.role == "customer" && req.query.username) || (req.user.role == "admin" && req.query.username)) null
//   else { req.query.username = req.user.username; req.query.password = req.user.password; }
//   db.collection("stats").find(req.query).toArray(function (err, docs) {
//     res.send(docs)
//   });
// })
// app.post('/app/stats', (req, res) => {
//   if (req.body) { req.body.username = req.user.username; req.body.password = req.user.password; }
//   db.collection("stats").insertOne(req.body, function (err, r) {
//     res.send(r)
//   })
// })
// app.delete('/app/stats/', (req, res) => {
//   req.query.username = req.user.username; req.query.password = req.user.password;
//   db.collection("stats").deleteMany(req.query, function (err, r) {
//     res.send(r)
//   });
// })
// //-------------------------------------
// // data collections
// //-------------------------------------
// const commonCollections = ["configs", "programs"]
// app.get('/app/collections/:collection', (req, res) => {
//   if (!req.user) res.redirect("/app/login?returnCode=logout")
//   else {
//     if (!commonCollections.includes(req.params.collection)) req.query.username = req.user.username
//     db.collection(`${req.params.collection}`).find(req.query).toArray(function (err, docs) {
//       if (err) throw err;
//       res.send(docs)
//     });
//   }
// })
// app.post('/app/collections/:collection', (req, res) => {
//   if (!req.user) res.statusCode(403)
//   else {
//     req.body.username = req.user.username
//     db.collection(`${req.params.collection}`).insertOne(req.body, function (err, r) {
//       if (err) throw err;
//       res.send(r)
//     })
//   }
// })
// app.put('/app/collections/:collection', (req, res) => {
//   if (!req.user) res.statusCode(403)
//   else {
//     for (var i = 0; i < Object.keys(req.query).length; ++i) {
//       req.body[Object.keys(req.query)[i]] = req.query[Object.keys(req.query)[i]]
//     }
//     req.query.username = req.user.username
//     db.collection(`${req.params.collection}`).updateOne(req.query, { $set: req.body }, { upsert: true }, function (err, r) {
//       if (err) throw err;
//       res.send(r)
//     })
//   }
// })

// //-------------------------------------
// // text add
// //-------------------------------------
// app.get('/app/addtext', (req, res) => {
//   if (req.user.username != "hüseyin") res.sendStatus(403)
//   else res.sendFile(__dirname + "/html/addText.html")
// })
// app.get('/app/texts2', (req, res) => {
//   if (req.user.username != "hüseyin") res.sendStatus(403)
//   else {
//     db.collection("texts2").find(req.query).toArray(function (err, docs) {
//       if (err) throw err;
//       res.send(docs)
//     });
//   }
// })
// app.post('/app/texts2', (req, res) => {
//   if (req.user.username != "hüseyin") res.sendStatus(403)
//   else {
//     db.collection("texts2").insertOne(req.body, function (err, r) {
//       res.send(r)
//     })
//   }
// })

// //-------------------------------------
// // admin and customer panel
// //-------------------------------------
// const authorizedUsers = ["hüseyin", "yakup"]

// app.get('/app/admin', (req, res) => {
//   if (req.user && req.user.role == "admin") res.sendFile(__dirname + "/html/admin.html")
//   else res.sendStatus(403)
// })

// app.get('/app/customer', (req, res) => {
//   if (req.user && req.user.role == "customer") res.sendFile(__dirname + "/html/customer.html")
//   else res.sendStatus(403)
// })

// app.get('/app/users', (req, res) => {
//   if (req.user.role != "admin" && req.user.role != "customer") res.sendStatus(403)
//   else {
//     delete req.query.query;
//     if (req.user.role == "customer") req.query.customer = req.user.username
//     db.collection("users").find(req.query).toArray(function (err, docs) {
//       if (err) throw err;
//       for (var i = 0; i < docs.length; i++) {
//         let timeStamp = new mongoObjectId(docs[i]._id).getTimestamp()
//         let date = ('0' + timeStamp.getDate()).slice(-2) + '/' + ('0' + (timeStamp.getMonth() + 1)).slice(-2) + '/' + timeStamp.getFullYear()
//         docs[i].register_date = date
//       }
//       res.send(docs)
//     });
//   }
// })

// // insert new user
// app.post('/app/users', (req, res) => {
//   if (req.user.role != "admin" && req.user.role != "customer") res.send({ errorCode: "unauthorized_access", errorMessage: "Yetkisiz işlem" })
//   else {
//     if (req.user.role == "customer") {
//       db.collection("users").findOne({ username: req.user.username }, function (err, doc) {
//         db.collection("users").countDocuments({ customer: req.user.username }, function (err, result) {
//           if (Number(result) < Number(doc.quota)) {
//             req.body.customer = req.user.username
//             db.collection("users").insertOne(req.body, function (err, r) {
//               res.send(r)
//             })
//           }
//           else {
//             res.send({ errorCode: "inusfficient_quota", errorMessage: "Yetersiz kontenjan" })
//           }
//         })
//       })
//     }
//     else {
//       db.collection("users").insertOne(req.body, function (err, r) {
//         res.send(r)
//       })
//     }
//   }
// })

// app.put('/app/users', (req, res) => {
//   if (req.user.role != "admin" && req.user.role != "customer") res.sendStatus(403)
//   else {
//     if (req.user.role == "customer") req.query.customer = req.user.username
//     db.collection("users").updateOne(req.query, { $set: req.body }, function (err, r) {
//       res.send(r)
//     })
//   }
// })
// app.delete('/app/users', (req, res) => {
//   if (req.user.role != "admin" && req.user.role != "customer") res.sendStatus(403)
//   else {
//     if (req.user.role == "customer") req.query.customer = req.user.username
//     db.collection("users").deleteOne(req.query, function (err, r) {
//       res.send(r)
//     })
//   }
// })

// //-------------------------------------
// // payments
// //-------------------------------------
// app.post('/app/payments', (req, res) => {
//   db.collection("payments").insertOne(req.body, function (err, r) {
//     res.send(r)
//   })
// })
// app.get('/app/payments', (req, res) => {
//   if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
//   else {
//     db.collection("payments").find(req.query).toArray(function (err, docs) {
//       if (err) throw err;
//       res.send(docs)
//     });
//   }
// })
// app.delete('/app/payments', (req, res) => {
//   if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
//   else {
//     db.collection("payments").deleteOne(req.query, function (err, r) {
//       res.send(r)
//     })
//   }
// })

// //-------------------------------------
// // contacts
// //-------------------------------------
// app.post('/app/contacts', (req, res) => {
//   const message = {
//     from: 'iletisim@huseyinyigit.com.tr', // Sender address
//     to: ['baykushizliokuma@gmail.com', 'iletisim@huseyinyigit.com.tr'],         // List of recipients
//     subject: `Baykuş Hızlı Okuma İletişim Formu Girdisi: ${req.body.name} - ${req.body.phone} - ${req.body.email}`, // Subject line
//     text: req.body.message // Plain text body
//   };
//   mailTransport.sendMail(message, function (err, info) {
//     console.log("İletişim formu girdisi.");
//     res.send({ status: "success" })
//   });
// })

// //-------------------------------------
// // payments
// //-------------------------------------
// var Iyzipay = require('iyzipay');
// var iyzipay = new Iyzipay({
//   apiKey: '311IEnNccwYKsvsdrLq39H0KTuqyxmTZ',
//   secretKey: 'd5hReumcexBMsxP0YUt7DT0dXbZlVgsK',
//   uri: 'https://api.iyzipay.com'
// });
// const geoip = require('geoip-lite');

// app.post('/app/payment/installment', (req, res) => {
//   Object.assign(req.body, { locale: Iyzipay.LOCALE.TR })
//   Object.assign(req.body, { conversationId: req.headers.cookie.bho })

//   iyzipay.installmentInfo.retrieve(req.body, function (err, result) {
//     if (err) res.send(err)
//     else res.send(result)
//   });
// })

// app.post('/app/payment/checkout', (req, res) => {
//   const location = geoip.lookup(req.ip)
//   Object.assign(req.body, {
//     locale: Iyzipay.LOCALE.TR,
//     // conversationId: req.headers.cookie.bho+'#'+String(Date.now()),
//     conversationId: String(Date.now()),
//     currency: Iyzipay.CURRENCY.TRY,
//     paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
//     paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
//   })
//   Object.assign(req.body.buyer, {
//     registrationAddress: (location && location.country) || 'Turkey',
//     ip: req.ip,
//     city: (location && location.city) || 'Istanbul',
//     country: (location && location.country) || 'Turkey',
//   })
//   Object.assign(req.body.billingAddress, {
//     city: (location && location.city) || 'Istanbul',
//     country: (location && location.country) || 'Turkey',
//     address: (location && location.city) || 'Istanbul',
//   })
//   Object.assign(req.body.basketItems[0], {
//     itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL
//   })
//   req.body.paymentCard.secure3d = 1 // for now
//   if (req.body.paymentCard.secure3d == '1') {
//     Object.assign(req.body, { callbackUrl: 'https://baykushizliokuma.com/app/payment/checkout/3ds' })
//     db.collection("payments").insertOne(req.body, function (err, r) { })
//     console.log(req.body)
//     iyzipay.threedsInitialize.create(req.body, function (err, result) {
//       if (err) { res.send(err); console.log(err) }
//       else {
//         // console.log(result)
//         db.collection("payments").updateOne({ conversationId: req.body.conversationId }, { $set: result }, function (err, r) {
//           res.send(result)
//         })
//       }
//     });
//   }
//   else {
//     iyzipay.payment.create(req.body, function (err, result) {
//       if (err) res.send(err)
//       else res.send(result)
//     });
//   }
// })

// app.get('/app/payment/3ds/:conversationId', (req, res) => {
//   db.collection("payments").findOne({ conversationId: req.params.conversationId }, function (err, doc) {
//     if (err) throw err;
//     if (doc) {
//       let buff = new Buffer.from(doc.threeDSHtmlContent, 'base64');
//       res.send(buff.toString('ascii'));
//     }
//     else res.sendStatus(500)
//   });
// })

// const { spawn } = require('child_process');

// app.post('/app/payment/checkout/3ds', (req, res) => {
//   let ls = undefined
//   if (req.body.conversationData) ls = spawn('python3', ["index.py", req.body.conversationId, req.body.paymentId, req.body.conversationData]);
//   else ls = spawn('python3', ["index2.py", req.body.conversationId, req.body.paymentId]);
//   let checkout3ds = undefined
//   let error = undefined
//   ls.stdout.on('data', (data) => {
//     checkout3ds = JSON.parse(`${data}`);
//   });

//   ls.stderr.on('data', (data) => {
//     error = `${data}`;
//   });

//   ls.on('close', (code) => {
//     console.log(checkout3ds)
//     if (checkout3ds) {
//       if (checkout3ds.status = "success" && !checkout3ds.errorCode) {
//         db.collection("payments").findOne({ conversationId: req.body.conversationId }, function (err, doc) {
//           if (err) throw err;
//           if (doc) {
//             const message = {
//               from: 'iletisim@huseyinyigit.com.tr', // Sender address
//               to: ['baykushizliokuma@gmail.com', 'yigit.hsyn@gmail.com'],         // List of recipients
//               subject: `Kredi kartı ile satın alma bildirimi - ${doc.buyer.name} ${doc.buyer.surname}`, // Subject line
//               text: "Allah bereket versin" // Plain text body
//             };
//             mailTransport.sendMail(message, function (err, info) { });

//             fs.readFile(`html/payment_success_2.html`, (err, data) => {
//               if (err) throw err;
//               else res.send(htmlMinify(`${data}`.replace("#name#", doc.buyer.name).replace("#surname#", doc.buyer.surname), minifyOptions))
//             });
//           }
//           else {
//             fs.readFile(`html/payment_error.html`, (err, data) => {
//               if (err) throw err;
//               else res.send(htmlMinify(`${data}`, minifyOptions))
//             });
//           }
//         });
//       }
//       else {
//         fs.readFile(`html/payment_error.html`, (err, data) => {
//           if (err) throw err;
//           else res.send(htmlMinify(`${data}`, minifyOptions))
//         });
//       }
//       db.collection("payments").updateOne({ conversationId: req.body.conversationId }, { $set: checkout3ds }, function (err, r) { })
//     }
//     else {
//       fs.readFile(`html/payment_error.html`, (err, data) => {
//         if (err) throw err;
//         else res.send(htmlMinify(`${data}`, minifyOptions))
//       });
//     }
//   });

// })

// app.get('/app/payment/success', (req, res) => {
//   fs.readFile(`html/payment_error.html`, (err, data) => {
//     if (err) throw err;
//     else res.send(htmlMinify(`${data}`, minifyOptions))
//   });
// })

// //=====================================
// // V2 Interface
// //=====================================

// //-------------------------------------
// // Texts
// // ------------------------------------
// app.get('/app/v2/texts', (req, res) => {
//   if (req.user) {
//     let listonly = (req.query.listonly) ? 1 : 0
//     delete req.query.listonly
//     if (listonly == 1) {
//       db.collection("text").find(req.query, { sort: { wordCount: 1 } }).project({ text: 0 }).toArray(function (err, docs) {
//         if (err) res.send(err)
//         else res.send(docs)
//       });
//     }
//     else {
//       db.collection("text").find(req.query, { sort: { wordCount: 1 } }).toArray(function (err, docs) {
//         if (err) res.send(err)
//         else res.send(docs)
//       });

//     }
//   }
//   else res.sendStatus(403)
// })
// app.post('/app/v2/texts', (req, res) => {
//   if (req.user && req.user.role == "admin") {
//     db.collection("text").insertOne(req.body, function (err, r) {
//       if (err) res.send(err)
//       else res.send(r)
//     })
//   }
//   else res.sendStatus(403)
// })
// app.put('/app/v2/texts/:_id', (req, res) => {
//   if (req.user && req.user.role == "admin") {
//     db.collection("text").updateOne({ _id: mongoObjectId(req.params._id) }, { $set: req.body }, { upsert: false }, function (err, r) {
//       if (err) res.send(err)
//       else res.send(r)
//     })
//   }
//   else res.sendStatus(403)
// })
// app.delete('/app/v2/texts/:_id', (req, res) => {
//   if (req.user && req.user.role == "admin") {
//     db.collection("text").deleteOne({ _id: mongoObjectId(req.params._id) }, function (err, r) {
//       if (err) res.send(err)
//       else res.send(r)
//     })
//   }
//   else res.sendStatus(403)
// })

server.listen(port, () => {
  console.log(`"www.signalregistry" app listening on port ${port}!`)
})

