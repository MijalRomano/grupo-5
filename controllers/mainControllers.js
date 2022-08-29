const express = require('express');
const path = require('path');

const controller = {
    
main: (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
}

}




module.exports = controller;
