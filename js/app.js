;(function () {
	const todos = [
	{
		id:1,
		title:'上课',
		completed: false
	},
	{
		id:2,
		title:'吃饭',
		completed: false
	},
	{
		id:3,
		title:'写代码',
		completed: false
	}
	]
	new Vue({
		data:{
		todos,
		currentEditing:null
		},
		methods:{
			handleNewTodoKeyDown(e){
				const target=e.target
				const value = e.target.value.trim()
				if(!value.length){
					return
				}
				const todos =this.todos
				this.todos.push({
					id:
					//如果数组是空的，返回1
					todos.length?todos[todos.length-1].id+1:1,
					title:value,
					completed:false
				})
				target.value=''
			},
			handleToggleAllChange(e){
				const checked = e.target.checked
				this.todos.forEach(item =>{
					item.completed = checked
				})
			},
			handleRemoveTodoCick(index,e){
				this.todos.splice(index,1)
			},
			handleGetEditingDblclick(todo){
				this.currentEditing=todo
				console.log(this.currentEditing)
			},
			//编辑任务，敲回车保存编辑
			handleSaveEditKeyDown(todo,index,e){
			const target =	e.target
			const value = target.value.trim()
			if(!value.length){
				this.todos.splice(index,1)
			}
			else{
				todo.title = value
				this.currentEditing = null
			}
			},
			handleCancleEditEsc(){
				//把样式去除
				this.currentEditing = null
			},
			handleClearAlldoneClick(){
				//不能在foreach循环遍历中删除数组元素，会导致索引混乱
				for(let i=0;i<this.todos.length;i++){
					if(this.todos[i].completed){
					this.todos.splice(i,1)
					//删除元素之后，遍历的小索引往后倒一次
					i--
					}
				}
			}
		}
	}).$mount('#app')

	// Your starting point. Enjoy the ride!

})()
