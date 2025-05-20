fun main(){
    println(greetings("Jane"))
    arrayOfIntegers(arrayOf(23,42,12,34,43,45))
    println(countVowels("extravagance"))
        println(reverseString("String"))
        println(palindrome("Madam"))
        println(areaOfRectangle(12.2,34.2))

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