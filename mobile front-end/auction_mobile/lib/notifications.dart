import 'package:auction_mobile/components/notification_card.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Notifications extends StatefulWidget {
  _NotificationsState createState() => _NotificationsState();
}

class _NotificationsState extends State<Notifications> {
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        physics: BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            actions: [
              TextButton(
                  onPressed: () {},
                  child: Text(
                    'Mark all as read',
                    style: TextStyle(color: Colors.white),
                  )),
              VerticalDivider(),
            ],
            title: Text('Notifications'),
          ),
          SliverList(
              delegate: SliverChildBuilderDelegate(
                  (context, index) => NotificationCard(),
                  childCount: 20))
        ],
      ),
    );
  }
}
