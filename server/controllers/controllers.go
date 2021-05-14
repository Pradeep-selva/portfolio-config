package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/utils"
)

func GetAboutContent(c *gin.Context){
	dsnap, err := utils.GetDoc("about")

	if err != nil {
		fmt.Println(err.Error())
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