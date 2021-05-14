package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/pradeep-selva/pradeep-selva-admin/server/entities"
	"github.com/pradeep-selva/pradeep-selva-admin/server/utils"
)

func MutateAbout(c *gin.Context) {
	var about entities.AboutType
	c.ShouldBindBodyWith(&about, binding.JSON)

	_, err := utils.GetDocRef("about").Set(utils.Ctx, map[string]interface{}{
		"description": about.Description,
		"skills": about.Skills,
	})
	if err != nil {
		utils.SendError(c)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data":"Updated successfully!",
		"statusCode": http.StatusOK,
	})
}