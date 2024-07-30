import 'package:flutter/material.dart';
import 'package:flutter_application_task/Categories.dart';
import 'package:flutter_application_task/screens/AlbumListPage.dart';
import 'package:flutter_application_task/screens/SignUp.dart';
import 'package:flutter_application_task/screens/Success.dart';
import 'package:flutter_application_task/screens/WelcomeInput.dart';
import 'package:flutter_application_task/screens/Products.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(
              seedColor: Color.fromARGB(255, 139, 78, 214)),
          useMaterial3: true,
        ),
        // home: WelcomeInput(),
        // home: SignUp(),
        // home: Products(),
        // home: SuccessScreen(),
        // home: Categories(),
        home: AlbumListPage());
  }
}
