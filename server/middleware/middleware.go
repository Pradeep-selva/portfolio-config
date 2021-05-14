package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pradeep-selva/pradeep-selva-admin/server/utils"
)

func sendError(c *gin.Context) {
	c.JSON(http.StatusUnauthorized, gin.H{
		"error":      "You are not authorized to be here",
		"statusCode": http.StatusUnauthorized,
	})
}

func CheckApiAuthorization(c *gin.Context) {
	token := c.Request.Header.Get("x-api-key")

    if token == "" {
		sendError(c)
		c.Abort()
    } else if token == string(utils.GetEnvVar("X-API-KEY")) {
        c.Next()
    } else {
		sendError(c)
		c.Abort()
    }
}