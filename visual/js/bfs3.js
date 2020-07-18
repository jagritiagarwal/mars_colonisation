var PL=INT_MAX;
var p;
algo(start,dest[]){
    var f=0;
    vis[start]=1;
    for(var i=0;i<dest.length();i++){

        if(vis[dest[i]]==0){
            f=1;
            vis[dest[i]]=1;
            parent[dest[i]]=start;
            var a=algo(dest[i],dest);
            if(a.length()<PL){
                p=a;
                PL=p.length();
            }
            vis[dest[i]]=0;
            parent[dest[i]]=-1;
        }
    }
    if(f==0)return Util.backtrace(start);
    else return p;
}