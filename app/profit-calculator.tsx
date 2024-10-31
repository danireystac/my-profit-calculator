'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfitCalculator() {
  const [costsWithVAT, setCostsWithVAT] = useState({
    tshirt: 0,
    printing: 0,
    shippingBag: 0,
    packagingBag: 0,
    shipping: 0,
    advertising: 0  // Nuevo campo para el coste de publicidad
  })
  const [profitMargin, setProfitMargin] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)

  const VAT_RATE = 0.21
  const costsWithoutVAT = Object.fromEntries(
    Object.entries(costsWithVAT).map(([key, value]) => [key, value / (1 + VAT_RATE)])
  )

  const totalCostWithVAT = Object.values(costsWithVAT).reduce((sum, cost) => sum + cost, 0)
  const totalCostWithoutVAT = Object.values(costsWithoutVAT).reduce((sum, cost) => sum + cost, 0)

  useEffect(() => {
    const basePriceWithVAT = totalCostWithVAT / (1 - profitMargin / 100)
    setFinalPrice(basePriceWithVAT)
  }, [totalCostWithVAT, profitMargin])

  const profitAmountWithVAT = finalPrice - totalCostWithVAT
  const profitAmountWithoutVAT = profitAmountWithVAT / (1 + VAT_RATE)
  const priceBeforeVAT = finalPrice / (1 + VAT_RATE)
  const VAT = finalPrice - priceBeforeVAT

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCostsWithVAT({
      ...costsWithVAT,
      [e.target.name]: parseFloat(e.target.value) || 0
    })
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Calculadora de Margen de Beneficio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <Label htmlFor="tshirt">Coste de la camiseta (con IVA)</Label>
              <Input
                id="tshirt"
                name="tshirt"
                type="number"
                value={costsWithVAT.tshirt}
                onChange={handleCostChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="printing">Coste de impresión (DTF) (con IVA)</Label>
              <Input
                id="printing"
                name="printing"
                type="number"
                value={costsWithVAT.printing}
                onChange={handleCostChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="shippingBag">Coste de la bolsa de envío (con IVA)</Label>
              <Input
                id="shippingBag"
                name="shippingBag"
                type="number"
                value={costsWithVAT.shippingBag}
                onChange={handleCostChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="packagingBag">Coste de la bolsa de empaquetado (con IVA)</Label>
              <Input
                id="packagingBag"
                name="packagingBag"
                type="number"
                value={costsWithVAT.packagingBag}
                onChange={handleCostChange}
                className="mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="shipping">Coste de envío (con IVA)</Label>
              <Input
                id="shipping"
                name="shipping"
                type="number"
                value={costsWithVAT.shipping}
                onChange={handleCostChange}
                className="mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="advertising">Coste de publicidad (con IVA)</Label>
              <Input
                id="advertising"
                name="advertising"
                type="number"
                value={costsWithVAT.advertising}
                onChange={handleCostChange}
                className="mt-1"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="profitMargin" className="block mb-2">
              Margen de beneficio: {profitMargin.toFixed(2)}%
            </Label>
            <Slider
              id="profitMargin"
              min={0}
              max={100}
              step={0.1}
              value={[profitMargin]}
              onValueChange={(value) => setProfitMargin(value[0])}
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold">Coste total (sin IVA)</p>
              <p>{totalCostWithoutVAT.toFixed(2)}€</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold">Coste total (con IVA)</p>
              <p>{totalCostWithVAT.toFixed(2)}€</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold">Beneficio (sin IVA)</p>
              <p>{profitAmountWithoutVAT.toFixed(2)}€</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold">Beneficio (con IVA)</p>
              <p>{profitAmountWithVAT.toFixed(2)}€</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold">Precio sin IVA</p>
              <p>{priceBeforeVAT.toFixed(2)}€</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-semibold">IVA (21%)</p>
              <p>{VAT.toFixed(2)}€</p>
            </div>
            <div className="sm:col-span-2 bg-green-100 p-4 rounded">
              <p className="font-semibold text-lg">Precio final con IVA</p>
              <p className="text-xl font-bold text-green-600">{finalPrice.toFixed(2)}€</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}