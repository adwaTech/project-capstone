import 'package:flutter/material.dart';

class DrawerComponent extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
    return Drawer(
            child: ListView(
              children: [
                SizedBox(
                  height: 300,
                  child: Center(
                    child: Text('M3K Auctions'),
                  ),
                ),
                Divider(),
                ListTile(
                  leading: Icon(Icons.home),
                  title: Text(
                      'Home'), // home, auction, categories, aobut, contact, FAQ, help and support'
                ),
                ListTile(
                  leading: Icon(Icons.shop),
                  title: Text('Your Auctions'),
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
          );
        
  }
}