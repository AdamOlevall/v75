export const firstToLast = (x, y) => { 
    const a= new Date(x.startTime);
    const b = new Date(y.startTime);
  
     if (a > b)
       return 1;
     if (a < b)
       return -1;
    
     return 0;
  };
  
  export const lastToFirst = (x, y) => { 
    const a= new Date(x.startTime);
    const b = new Date(y.startTime);
  
     if (a > b)
       return -1;
     if (a < b)
       return 1;
    
     return 0;
  };
  