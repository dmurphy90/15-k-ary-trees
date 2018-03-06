# 15 K-ary Trees

## Installing

To begin using this app, fork then clone the repository down to your machine. After you have cloned the repository navigate to the folder lab-dean. In your terminal type npm install to install all package dependencies for the app.

## Data Structures

The two methods in these modules are ```reader.readData``` and ```reader.htmlTree```

```reader.readData``` reads the HTML file and provides a buffer which is then stringified. The ```<!DOCTYPE html>``` tag is removed and then the buffer is passed into ```reader.htmlTree```

```reader.htmlTree``` takes in the stringified buffer handed down from ```reader.readData``` creates a stack and after a series of conditionals passes the HTML elements to and from a stack with push and pop. Afterwards it passes the elements into a proper tree node according to type value and parent values. This tree is then kicked back to ```reader.readData```