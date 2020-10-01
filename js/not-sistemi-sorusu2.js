let Notlar=[90,80,70,65,60,50,30,0]
let HarfNotu=["AA","BA","BB","CB","CC","DD","FD","FF"]

function NotSistemi(not){
	let a= Notlar.filter(x=> x<=not)
	let b= HarfNotu[Notlar.indexOf(Math.max(...a))]
	console.log(b)
}
NotSistemi(72)
