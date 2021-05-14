package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/pradeep-selva/pradeep-selva-admin/server/entities"
	"github.com/pradeep-selva/pradeep-selva-admin/server/utils"
)

func sendSuccess(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"data":"Updated successfully!",
		"statusCode": http.StatusOK,
	})
}

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

	sendSuccess(c)
}

func MutateProjectsOrWork(c *gin.Context) {
	var body entities.GeneralBody
	c.ShouldBindBodyWith(&body, binding.JSON)

	docName, _ := c.Params.Get("doc")

	if docName != "projects" && docName != "work" {
		c.JSON(http.StatusOK, gin.H{
			"error": "only available document names are projects and work",
			"statusCode": http.StatusBadRequest,
		})
		return
	}

	_, err := utils.GetDocRef(docName).Set(utils.Ctx, map[string]interface{}{
		"content": body.Content,
	})
	if err != nil {
		utils.SendError(c)
		return
	}

	sendSuccess(c)
}