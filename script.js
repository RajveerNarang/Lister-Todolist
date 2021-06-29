var app = new function(){
    this.el= document.getElementById('stuff');
    this.stuff=[]
        //Read data
    this.fetchall = function() {
        var data ='';

      if(this.stuff.length>0){
          for(i=0;i<this.stuff.length;i++){
           
              data+='  &nbsp;&nbsp;&nbsp;<tr>' ;
              data+='<td>'+(i+1)+'. '+this.stuff[i]+'</td>';
              data+='<td><button onclick="app.edit('+i+' )"   class="btn btn-warning">Edit</button>&nbsp;&nbsp;&nbsp; </td>'
              data+='<td><button onclick="app.delete('+i+' )"   class="btn btn-danger">Delete</button></td>'
            data+= '</tr>'   
              
         
             } 
            
            }            
            this.count(this.stuff.length);
            return this.el.innerHTML=data
            
            };
    //Create Entry
    this.add =function() {
        el = document.getElementById('add-todo');
        var stuff = el.value;
        if(stuff){
            this.stuff.push(stuff.trim());
            this.el.value="";
            this.fetchall();

        }

    };
    //Update Entry
    this.edit = function(item) {

        var el =document.getElementById('edit-todo');
        //display value in field
        el.value =this.stuff[item];
        //display list
        document.getElementById('edit-box').style.display = "block";
        self= this;


        document.getElementById('save-edit').onsubmit = function(){
            var stuff =el.value;
            if(stuff){
                self.stuff.splice(item , 1, stuff.trim());
                self.fetchall();
                closeinput();
            }
        }
    };
    this.delete =function (item) {
        this.stuff.splice(item,1)
        this.fetchall();



    };
    //display count and items
    this.count =function(data) {
        var el = document.getElementById('count');
            var name ='Tasks';
            if(data){
                if(data==1){
                name = 'Task';
                }
                el.innerHTML= data+' '+name + ' 😁';
            }
            else{
                el.innerHTML = "Nothing to remember Right Now 😢 ";
            }
          
    };


} 
app.fetchall();

function closeinput(){
    document.getElementById('edit-box').style.display="none";
}
