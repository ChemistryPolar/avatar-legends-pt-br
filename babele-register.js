Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'avatar-legends-pt-br',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
