package main

import (
	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/middleware"
	"github.com/pradeep-selva/pradeep-selva-admin/server/routes"
	utils "github.com/pradeep-selva/pradeep-selva-admin/server/utils"
)

var PORT string

func main(){
	utils.LoadDotEnv()

	utils.FirebaseInit()
	defer utils.Client.Close()

	router := gin.Default()
	router.Use(middleware.CORSMiddleware())
	router.Use(middleware.CheckApiAuthorization)
	
	apiRouter := router.Group("/api/")
	
	routes.InitHomeRoute(router)
	routes.InitAPIRoutes(apiRouter)

	PORT = utils.GetEnvVar("PORT")
	if PORT == "" {
		PORT = "8080"
	}
	router.Run(":"+PORT)
}