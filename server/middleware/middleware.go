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

func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, x-api-key, Authorization, accept, origin, Cache-Control, X-Requested-With")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }

        c.Next()
    }
}