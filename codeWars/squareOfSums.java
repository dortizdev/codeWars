public class Kata{
  public static int squareSum(int[] n){ 
    int sum = 0;
    for (int nums: n) {
      sum += nums * nums;
    }
    return sum;
  }
};