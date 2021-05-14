package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/controllers"
)

func InitHomeRoute(router *gin.Engine){
	router.GET("/", controllers.Home)
}

func InitAPIRoutes(router *gin.RouterGroup) {
	//fetch
	router.GET("/about", controllers.GetAboutContent)
	router.GET("/projects", controllers.GetProjects)
	router.GET("/work", controllers.GetWorkExperience)
	//mutate
	router.PUT("/about", controllers.MutateAbout)
	router.PUT("/work-project/:doc", controllers.MutateProjectsOrWork)
}