package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/routes"
	utils "github.com/pradeep-selva/pradeep-selva-admin/server/utils"
)

func main(){
	utils.FirebaseInit()
	defer utils.Client.Close()

	router := gin.Default()

	router.GET("/", func (c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": "Go to path /api/ to use api",
		})
	})

	apiRouter := router.Group("/api/")
	routes.InitRoutes(apiRouter)

	PORT := "8080"
	router.Run(":"+PORT)
}