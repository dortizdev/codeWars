public class Counter{
  public int countSheeps(Boolean[] arrayOfSheeps){
        int count=0;
    for(int i=0; i < arrayOfSheeps.length; i++){
      if(arrayOfSheeps[i] == null){
        continue;
      }
      if(arrayOfSheeps[i] == true){
        count += 1;
      }
    }
    return count;
  }
}