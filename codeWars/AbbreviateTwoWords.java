public class AbbreviateTwoWords {
  public static String abbrevName(String name) {
    String[] fullName = name.split(" ");
    String firstInitial = fullName[0].substring(0,1).toUpperCase();
    String secondInitial = fullName[1].substring(0,1).toUpperCase();
      return firstInitial + '.' + secondInitial;
  }
}