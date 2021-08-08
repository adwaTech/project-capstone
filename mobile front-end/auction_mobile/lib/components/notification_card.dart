import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class NotificationCard extends StatelessWidget {
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        height: 100,
        child: ListTile(
          isThreeLine: true,
          title: Text('Your auction is ready'),
          subtitle: Text(
              'Your auction is visible to customers. Check how it looks to customers'),
          trailing: TextButton(
            onPressed: () {},
            child: Text('Mark as read'),
          ),
          onTap: () {},
        ),
      ),
    );
  }
}
