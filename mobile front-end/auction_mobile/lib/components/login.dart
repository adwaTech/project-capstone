import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget{
  _LoginPage createState()=>_LoginPage();
}
class _LoginPage extends State<LoginPage>{
  Widget build(BuildContext context){
    return Scaffold(
      body: Center(child:Container(
        width: 300,
        child:Form(
        child:Column(
          mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextFormField(
            decoration: InputDecoration(
              hintText: 'Email'
            ),
          ),
          Divider(),
          TextFormField(
            decoration: InputDecoration(
              hintText: 'Password'
            ),
          ),
          Divider(),
          Container(
            height: 50,
            width: 100,
            child: ElevatedButton(
                child: Text('Login'),
                onPressed: (){},
              ),
            ),
          

        ],
      ))
    )));
  }
}