public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
      int num = Integer.MAX_VALUE;
      for(int i = 0; i<args.length; i++){
        if (args[i] < num){
          num = args[i];
        }
      }
      return num;
    }
}