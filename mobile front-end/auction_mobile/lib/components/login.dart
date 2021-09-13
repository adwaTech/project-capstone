import 'package:auction_mobile/api/api.dart';
import 'package:auction_mobile/providers/main_session_provider.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class LoginPage extends StatefulWidget{
  _LoginPage createState()=>_LoginPage();
}
class _LoginPage extends State<LoginPage>{
  TextEditingController _emailController,_passwordController;
  GlobalKey<FormState> _form;
  void initState(){
    super.initState();
    _emailController = TextEditingController(text: 'kirubeladamu@gmail.com');
    _passwordController = TextEditingController(text: '12345678');
    _form = GlobalKey<FormState>();
  }
  Widget build(BuildContext context){
    return Scaffold(
      body: Center(child:Container(
        width: 300,
        child:Form(
          key: _form,
        child:Column(
          mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextFormField(
            validator: (value)=>(value.length ==0)?'This field is required':null,
            controller: _emailController,
            decoration: InputDecoration(
              hintText: 'Email',
            ),
          ),
          Divider(),
          TextFormField(
            validator:(value)=>(value.length ==0)?'This field is required':null,
            controller: _passwordController,
            decoration: InputDecoration(
              hintText: 'Password'
            ),
          ),
          Divider(),
          Consumer<SessionProvider>(
            builder:(context,sessionProvider,child)=> Container(
              height: 50,
              width: 100,
              child: ElevatedButton(
                  child: Text('Login'),
                  onPressed: (){
                    if(_form.currentState.validate())
                    API.getInstance().login(_emailController.value.text, _passwordController.value.text).then((value) {
                      if(value) {
                        sessionProvider.isLoggedIn=true;
                      }
                    });
                  },
                ),
              ),
          ),
          

        ],
      ))
    )));
  }
}