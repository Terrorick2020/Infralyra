package utils

import (
	"encoding/json"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

func HashStr(str string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(str), bcrypt.DefaultCost)
	return string(bytes), err
}

func CheckStrHash(hash, plain string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(plain))
	return err == nil
}

func GenerateToken[T any](data T, ttl time.Duration, secret string) (string, error) {
	jsonBytes, err := json.Marshal(data)
	if err != nil {
		return "", err
	}

	var claims map[string]interface{}
	if err := json.Unmarshal(jsonBytes, &claims); err != nil {
		return "", err
	}

	now := time.Now()
	claims["exp"] = now.Add(ttl).Unix()
	claims["iat"] = now.Unix()

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims(claims))
	signedToken, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", err
	}

	return signedToken, nil
}

func ParseToken[T any](tokenString string, secret, prefix string) (T, error) {
	var result T

	if strings.HasPrefix(tokenString, fmt.Sprintf("%s ", prefix)) {
		tokenString = strings.TrimPrefix(tokenString, fmt.Sprintf("%s ", prefix))
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("неожиданный метод подписи")
		}
		return []byte(secret), nil
	})
	if err != nil {
		return result, err
	}

	if claimsMap, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		jsonBytes, err := json.Marshal(claimsMap)
		if err != nil {
			return result, err
		}
		if err := json.Unmarshal(jsonBytes, &result); err != nil {
			return result, err
		}
		return result, nil
	}

	return result, errors.New("неправильный токен")
}
