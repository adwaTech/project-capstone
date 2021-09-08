import 'package:auction_mobile/api/api.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget{
  _LoginPage createState()=>_LoginPage();
}
class _LoginPage extends State<LoginPage>{
  TextEditingController _emailController,_passwordController;
  void initState(){
    super.initState();
    _emailController = TextEditingController();
    _passwordController = TextEditingController();
  }
  Widget build(BuildContext context){
    return Scaffold(
      body: Center(child:Container(
        width: 300,
        child:Form(
        child:Column(
          mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextFormField(
            controller: _emailController,
            decoration: InputDecoration(
              hintText: 'Email'
            ),
          ),
          Divider(),
          TextFormField(
            controller: _passwordController,
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
                onPressed: (){
                  API.getInstance().login(_emailController.value.text, _passwordController.value.text).then((value) {
                    if(value) {
                      // login
                    }
                  });
                },
              ),
            ),
          

        ],
      ))
    )));
  }
}