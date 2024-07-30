class Laptop {
  int id;
  String name;
  int ram;
  Laptop(this.id, this.name, this.ram);
}

Laptop laptop1 = new Laptop(1, 'dell', 8);
Laptop laptop2 = new Laptop(1, 'hp', 8);
Laptop laptop3 = new Laptop(1, 'leonovo', 8);

class House {
  int id;
  String name;
  int prize;
  House(this.id, this.name, this.prize);
}

House house1 = new House(1, 'alexandria ', 8);
House house2 = new House(2, 'cairo', 8);
House house3 = new House(3, 'ismailia', 8);
List<House> houses = [house1, house2, house3];

void main() {
  print(laptop1.name);
  houses.forEach((house) => print('${house.id} ${house.name} ${house3.prize}'));
}
