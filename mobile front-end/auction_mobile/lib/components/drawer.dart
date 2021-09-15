import 'package:auction_mobile/components/contact_us.dart';
import 'package:auction_mobile/post_auction.dart';
import 'package:flutter/material.dart';

import '../your_auctions.dart';
import '../your_bids.dart';
import 'about.dart';

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
            onTap: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => YourAuctions()));
            },
            leading: Icon(Icons.shop),
            title: Text('Your Auctions'),
          ),
          ListTile(
            onTap: () {
              Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => YourBids()));
            },
            leading: Icon(Icons.shop),
            title: Text('Your Bids'),
          ),
          ListTile(
            onTap: (){
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context)=>PostAuction())
              );
            },
            leading: Icon(Icons.add),
            title: Text('Post Auction'),
          ),
          ListTile(
            leading: Icon(Icons.money),
            title: Text('Manage Account Balance'),
          ),
          ListTile(
           onTap: (){
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context)=>AboutPage())
              );
            },
            leading: Icon(Icons.info),
            title: Text('About'),
          ),
          ListTile(
            onTap: (){
              Navigator.of(context).push(
                MaterialPageRoute(builder: (context)=>ContactUsPage())
              );
            },
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
