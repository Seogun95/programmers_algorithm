function solution(sizes) {
    let biggerSideMax = 0;
    let smallerSideMax = 0;
    
    for(let i = 0; i < sizes.length; i++) {
        let w = sizes[i][0];
        let h = sizes[i][1];
        
        if(w > h) {
            if (biggerSideMax < w) { biggerSideMax = w; console.log(smallerSideMax);};
            if (smallerSideMax < h) { smallerSideMax = h};
        } else {
            if (biggerSideMax < h) { biggerSideMax = h};
            if (smallerSideMax < w) { smallerSideMax = w}
            
        }
        
    }
    
    return biggerSideMax * smallerSideMax;
}