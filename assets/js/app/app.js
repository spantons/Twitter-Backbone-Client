$(function(){
	var timeLineView = new com.apress.view.TimelineView(),
		profileView = new com.apress.view.ProfileView({user:'spantons'}),
		searchModel = new com.apress.model.Search(),
		searchView = new com.apress.view.SearchView({model: searchModel});
		appRouter = new com.apress.router.AppRouter({searchModel: searchModel});

	Backbone.history.start();
});