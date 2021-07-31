import 'package:flutter/material.dart';

void main() {
  runApp(AuctionApp());
}

class AuctionApp extends StatefulWidget{
  _AuctionAppState createState()=> _AuctionAppState();
}
class _AuctionAppState extends State<AuctionApp>{
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    title: 'M3K Auction',
    home: Scaffold(
      
      appBar: AppBar(
        title: Text('M3K Auction'), // Login, 
        actions: [
          Padding(
            padding:EdgeInsets.all(10),
            child:ElevatedButton(onPressed: (){}, child: Text('Log in')))
        ],
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            SizedBox(
              height: 300,
              child: Center(
                child: Text('M3K Auctions'),
              ),
            ),
            ListTile(
              leading: Icon(Icons.home),
              title: Text('Home'), // home, auction, categories, aobut, contact, FAQ, help and support'
            ),
            ListTile(
              leading: Icon(Icons.shop),
              title: Text('Auctions'),
            ),
            ListTile(
              leading: Icon(Icons.category),
              title: Text('Categories'),
            ),
            ListTile(
              leading: Icon(Icons.info),
              title: Text('About'),
            ),
            ListTile(
              leading: Icon(Icons.contact_phone),
              title: Text('Contact'),
            ),
            ListTile(
              leading: Icon(Icons.question_answer),
              title: Text('FAQ'),
            ),
            ListTile(
              leading: Icon(Icons.help_center),
              title: Text('Help and support'),
            )
          ],
        ),
      ),
      body: Container(
        child: Text('Hello world'),
      ),
    ),
  );
}