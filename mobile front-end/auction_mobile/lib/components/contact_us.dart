import 'package:flutter/material.dart';

class ContactUsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Contact Us'),
        ),
        body: Card(
          child: Column(
            children: [
              Container(
                height: 200,
                width: MediaQuery.of(context).size.width,
                child: Image.asset('assets/images/product_logo.jpg',
                    fit: BoxFit.cover),
              ),
              Divider(),
              Center(child: Text('Email')),
              Center(child: Text('loremIpsum@dolot.com'))
            ],
          ),
        ));
  }
}
