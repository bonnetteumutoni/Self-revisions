fun main(){
    println(greetings("Jane"))
    arrayOfIntegers(arrayOf(23,42,12,34,43,45))
    println(countVowels("extravagance"))
        println(reverseString("String"))
        println(palindrome("Madam"))
        println(areaOfRectangle(12.2,34.2))
        println(greetings("Jane"))
        arrayOfIntegers(arrayOf(23,42,12,34,43,45))
        println(countVowels("extravagance"))
        println(reverseString("String"))
        println(palindrome("Madam"))
        println(areaOfRectangle(12.2,34.2))

          val colors=listOf("red","yellow","blue","green")
    println(colors)

    val friends=mutableListOf("Beth","Caleb","Pius","Jane","Ello")
    println(friends)
    friends.add("Ken")
    friends.add("Maggie")
    friends.remove("Jane")
    friends.removeAt(1)
    println(friends)
  friends.addAll(arrayOf("Richard","Grace","Mercy"))
  println(friends)
  friends.add(1,"Emebet")
  println(friends)
  val numbs=listOf(22,3,430,32,12,324,4,582,5,3)
  println(numbs.size)
  println(numbs.count())
  println(numbs.max())
  println(numbs.min())
  println(numbs.average())
  println(numbs.first())
  println(numbs.last())
  val st1=Student("Diana",19,54,"Rwanda")
  val st2=Student("Elsa",23,88,"Ethiopia")
  val st3=Student("Kabe",22,71,"Kenya")
  val st4=Student("Joy",22,68,"Uganda")
////
  val students=listOf(st1,st2,st3,st4)
  val above20=students.filter { student -> student.age>=18 && student.age %2!=0 }
  println(above20)
 val sortedStudents=students.sortedByDescending { student -> student.age }
  println(sortedStudents)
  println(students)
  for(student in students){
    println(student)
    println(student.codehiveId)
  }

  val fruits=listOf("Mango","banana","Apple","pineapple","Kiwi")
  val sortedFruits=fruits.sorted()
  println(sortedFruits)
val nums=listOf(34,6,1,78,23,36,21,25)
  val oddnum=nums.filter { num->num%2!=0 }
  println(oddnum)

  var bus = Bus ("KDA 123T", 40,0)
  var passanger = Passanger ("Alice", "12345678")
  var ticket = bus.book(passanger,"Nairobi", "Kisumu", 10,"14-05-2025")

    if(ticket != null){
        bus.printTicket(ticket)
    }
  bus.printTicket(ticket!!)

}
fun greetings(name:String): String{
    return "Hello $name, Welcome to our page!"
}
//Write a Kotlin function that takes an array of integers and prints only even numbers.
fun arrayOfIntegers(numbers: Array<Int>){
    val newArray=mutableListOf<Int>()
    for(number in numbers){
        if(number%2==0){
            newArray.add(number)
        }
    }
    println(newArray)
}
//3. Write a Kotlin function `countVowels` that counts the number of vowels in a given string.
fun countVowels(input: String): Int {
    val vowels = listOf('a', 'e', 'i', 'o', 'u')
    var count = 0

    for (char in input.lowercase()) {
        if (char in vowels) {
            count++
        }
    }

    return count
}
fun reverseString(word:String): String{
    return word.reversed()
}
//Write a Kotlin function that checks if a string is a palindrome or not.
fun palindrome(text: String): String{
    if (text.reversed().lowercase()==text.lowercase()){
        return "$text is a palindrome"
    }else{
        return "$text is not a palindrome"
    }
}
//Write a Kotlin function that calculates and returns the area of a rectangle. It should take 'length' and 'width' as arguments, with default values of 0.0.
fun areaOfRectangle(length:Double=0.0,width: Double=0.0): Double{
    val area=length*width
    return area
}
fun greetings(name:String): String{
    return "Hello $name, Welcome to our page!"
}
//Write a Kotlin function that takes an array of integers and prints only even numbers.
fun arrayOfIntegers(numbers: Array<Int>){
    val newArray=mutableListOf<Int>()
    for(number in numbers){
        if(number%2==0){
            newArray.add(number)
        }
    }
    println(newArray)
}
//3. Write a Kotlin function `countVowels` that counts the number of vowels in a given string.
fun countVowels(input: String): Int {
    val vowels = listOf('a', 'e', 'i', 'o', 'u')
    var count = 0

    for (char in input.lowercase()) {
        if (char in vowels) {
            count++
        }
    }

    return count
}
fun reverseString(word:String): String{
    return word.reversed()
}
//Write a Kotlin function that checks if a string is a palindrome or not.
fun palindrome(text: String): String{
    if (text.reversed().lowercase()==text.lowercase()){
        return "$text is a palindrome"
    }else{
        return "$text is not a palindrome"
    }
}
//Write a Kotlin function that calculates and returns the area of a rectangle. It should take 'length' and 'width' as arguments, with default values of 0.0.
fun areaOfRectangle(length:Double=0.0,width: Double=0.0): Double{
    val area=length*width
    return area
}

data class Student(
  var name:String,
  var age:Int,
  var codehiveId:Int,
  var nationality:String
) {
  fun studentOddAges(students: List<Student>): List<Student> {
    val result = mutableListOf<Student>()
    for (student in students) {
      if (student.age % 2 != 0) {
        result.add(student)
      }
    }
    return result
  }
}

data class Passanger(var name:String,
                     var idNumber: String,
)
data class Ticket(
  var passangerName: String,
  var passangerId: String,
  var departure: String,
  var destination: String,
  var seatNo: Int,
  var dateOfTravel: String,
  var busRegNo: String,
  var fare: Int
)
class Bus (
  var regNo: String,
  var capacity: Int,
  var bookedSeats: Int
){
  var takenSeats = arrayOf<Int>()


  fun book(passanger:Passanger, departure: String, destination: String,
           seatNo: Int, dateOfTravel: String):Ticket? {
    var availableSeats = capacity - bookedSeats
    if(availableSeats <=0){
      println("No seats available")
      return null
    }
    if(seatNo in takenSeats){
      println("Seat is not available")
      return null
    }
    var ticket = Ticket (passanger.name, passanger.idNumber,
      departure, destination,seatNo,dateOfTravel, regNo, 1200)
    bookedSeats++
    takenSeats = takenSeats.plus(seatNo)
    return ticket
  }

  fun printTicket (ticket:Ticket){
    println(ticket)
  }


}