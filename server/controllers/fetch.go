package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/utils"
)

func Home(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"data": "Go to path /api/ to use api",
		"statusCode": http.StatusOK,
	})
}

func GetAboutContent(c *gin.Context){
	dsnap, err := utils.GetDoc("about")

	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"error": "An error occurred",
			"statusCode": http.StatusInternalServerError,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": dsnap.Data(),
		"statusCode": http.StatusOK,
	})
}

func GetProjects(c *gin.Context){
	dsnap, err := utils.GetDoc("projects")

	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"error":"An error occurred",
			"statusCode": http.StatusInternalServerError,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": dsnap.Data(),
		"statusCode": http.StatusOK,
	})
}

func GetWorkExperience(c *gin.Context){
	dsnap, err := utils.GetDoc("work")

	if err != nil {
		c.JSON(http.StatusOK, gin.H{
			"error":"An error occurred",
			"statusCode": http.StatusInternalServerError,
		})
		return	
	}

	c.JSON(http.StatusOK, gin.H{
		"data": dsnap.Data(),
		"statusCode": http.StatusOK,
	})
}