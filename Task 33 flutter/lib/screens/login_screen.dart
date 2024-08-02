import 'package:flutter/material.dart';
import 'package:flutter_application_1/screens/landing_screen.dart';

class loginScreen extends StatelessWidget {
  const loginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      padding: EdgeInsets.all(12),
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      decoration: BoxDecoration(
          image: DecorationImage(
              fit: BoxFit.cover, image: AssetImage("images/background.jpg"))),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.05,
          ),
          Image.asset("images/logo.png", width: 300),
          Text(
            "Please enter your username",
            style: TextStyle(
                fontSize: 30, fontWeight: FontWeight.bold, color: Colors.black),
            textAlign: TextAlign.center,
          ),
          TextField(
            decoration: InputDecoration(
                enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(width: 2, color: Colors.cyanAccent),
                    borderRadius: BorderRadius.circular(15)),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                      width: 2,
                      color: const Color.fromARGB(255, 151, 196, 196)),
                  borderRadius: BorderRadius.circular(15),
                ),
                labelStyle: TextStyle(color: Colors.blue, fontSize: 26)),
          ),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute<void>(
                        builder: (BuildContext context) =>
                            const LandingScreen(),
                      ));
                },
                child: Text("login")),
          ),
          SizedBox(
            height: 20,
          )
        ],
      ),
    ));
  }
}
