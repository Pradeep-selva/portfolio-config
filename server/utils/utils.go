package utils

import (
	"context"
	"net/http"
	"path/filepath"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"github.com/gin-gonic/gin"
	"google.golang.org/api/option"
)

var Client *firestore.Client
var Ctx context.Context

func FirebaseInit() {
	Ctx = context.Background()
	serviceAccountKeyPath, _ := filepath.Abs("./serviceAccountKey.json")
	sa := option.WithCredentialsFile(serviceAccountKeyPath)
	app, err := firebase.NewApp(Ctx, nil, sa)

	if err != nil {
		panic(err)
	}

	Client, err = app.Firestore(Ctx)

	if err != nil {
		panic(err)
	}
}

func GetDocRef(document string) *firestore.DocumentRef {
	return Client.Collection("configs").Doc(document)
}

func GetDoc(document string) (_ *firestore.DocumentSnapshot, err error) {
	return Client.Collection("configs").Doc(document).Get(Ctx)
}

func SendError(c *gin.Context){
	c.JSON(http.StatusOK, gin.H{
			"error": "An error occurred",
			"statusCode": http.StatusInternalServerError,
	})
}