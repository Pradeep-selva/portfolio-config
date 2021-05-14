package entities

type AboutType struct {
	Description string `json:"description"`
	Skills []string `json:"skills"`
}

type GeneralBody struct {
	Content string `json:"content"`
}