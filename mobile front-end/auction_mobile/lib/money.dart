import 'package:auction_mobile/providers/main_session_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import 'api/api.dart';

class MoneyPage extends StatefulWidget {
  final double balance;
  MoneyPage(this.balance);
  @override
  _MoneyPageState createState() => _MoneyPageState();
}

class _MoneyPageState extends State<MoneyPage> {
  String depositProvider = 'cbebirr';
  String withdrawProvider = 'cbebirr';
  double balance;
  TextEditingController depositController = TextEditingController(),
  
  withdrawController = TextEditingController();
  void initState(){
    super.initState();
    balance = widget.balance;
  }
  Widget build(BuildContext context) => Scaffold(
      appBar: AppBar(title: Text('Account Balance')),
      body: Container(
        child: ListView(
          children: [
            Card(
              elevation: 5,
                child: Container(
              height: 100,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [Text('Current Balance'), Text('$balance')],
              ),
            )),
            Divider(),
            Card(
              elevation: 5,
              child: Container(
                height: 200,
                child: Column(children: [
                  Row(children: [
                    Text('Choose Deposit provider'),
                    DropdownButton(
                        value: depositProvider,
                        onChanged: (value) {
                          setState(() {
                            depositProvider = value;
                          });
                        },
                        items: [
                          DropdownMenuItem(
                            child: Text('CBE Birr'),
                            value: 'cbebirr',
                          ),
                          DropdownMenuItem(child: Text('Amole'), value: 'amole')
                        ])
                  ]),
                  Row(children:[
                    Expanded(
                      child: TextField(
                        controller: depositController,
                        inputFormatters: [
                          FilteringTextInputFormatter.digitsOnly
                        ],
                        decoration: InputDecoration(
                          hintText: 'Enter amount'
                        ),
                      )
                    ),
                    ElevatedButton(
                      child: Text('Deposit'),
                      onPressed:(){
                        if(depositController.value.text.isNotEmpty)
                        API.getInstance().deposit(double.parse(depositController.value.text), depositProvider).then((value) =>setState((){
                          balance = value;
                        }));
                      }
                    )
                  ])
                ]),
              ),
            ),
            Card(
              elevation: 5,
              child: Container(
                height: 200,
                child: Column(children: [
                  Row(children: [
                    Text('Choose Withdrawal provider'),
                    DropdownButton(
                        value: withdrawProvider,
                        onChanged: (value) {
                          setState(() {
                            withdrawProvider = value;
                          });
                        },
                        items: [
                          DropdownMenuItem(
                            child: Text('CBE Birr'),
                            value: 'cbebirr',
                          ),
                          DropdownMenuItem(child: Text('Amole'), value: 'amole')
                        ])
                  ]),
                  Row(children:[
                    Expanded(
                      child: TextField(
                        controller: withdrawController,
                        inputFormatters: [
                          FilteringTextInputFormatter.digitsOnly
                        ],
                        decoration: InputDecoration(
                          hintText: 'Enter amount'
                        ),
                      )
                    ),
                    ElevatedButton(
                      child: Text('Withdraw'),

                      onPressed:(){
                        if(withdrawController.value.text.isNotEmpty)
                        API.getInstance().withdraw(double.parse(withdrawController.value.text), withdrawProvider).then((value) => setState((){
                          balance = value;
                        }));
                      }
                    )
                  ])
                ]),
              ),
            )
          ],
        ),
      ));
}
