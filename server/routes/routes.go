package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/controllers"
)

func InitRoutes(router *gin.RouterGroup) {
	router.GET("/about", controllers.GetAboutContent)
}