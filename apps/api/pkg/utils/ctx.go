package utils

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func GetClaims[T any](ctx *gin.Context, key string) (T, error) {
	var zero T

	val, exists := ctx.Get(key)
	if !exists {
		return zero, fmt.Errorf("Kлюч %q не найден в контексте", key)
	}

	typedVal, ok := val.(T)
	if !ok {
		return zero, fmt.Errorf("Не удалось привести значение по ключу %q к нужному типу", key)
	}

	return typedVal, nil
}
