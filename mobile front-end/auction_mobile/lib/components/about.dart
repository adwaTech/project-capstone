import 'package:flutter/material.dart';

class AboutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('About Us'),
      ),
      body: Column(
        children: [
          Container(
              height: 200,
              width: MediaQuery.of(context).size.width,
              child: Image.asset('assets/images/product_logo.jpg',
                  fit: BoxFit.cover)),
          Card(
            elevation: 10,
            child: Text(
                'Hello, This app is develped for you, customers, to be able to particpate in and create auctions at the comfort of your home'),
          ),
        ],
      ),
    );
  }
}
