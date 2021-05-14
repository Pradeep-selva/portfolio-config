package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/controllers"
)

func InitHomeRoute(router *gin.Engine){
	router.GET("/", controllers.Home)
}

func InitAPIRoutes(router *gin.RouterGroup) {
	router.GET("/about", controllers.GetAboutContent)
	router.GET("/projects", controllers.GetProjects)
	router.GET("/work", controllers.GetWorkExperience)
}