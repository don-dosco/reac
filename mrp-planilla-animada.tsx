import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Wine, Package, Droplet, Grape, ArrowRight, ArrowDown } from 'lucide-react'

const MRPPlanillaAnimada = () => {
  const [activeTab, setActiveTab] = useState('tabla')

  const generalInfo = [
    { label: "Demanda anual", value: "100,000 cajas", icon: <Package className="w-5 h-5 text-primary" /> },
    { label: "Capacidad mensual", value: "10,000 cajas", icon: <Package className="w-5 h-5 text-primary" /> },
    { label: "Stock de seguridad", value: "10,000 cajas", icon: <Package className="w-5 h-5 text-primary" /> },
    { label: "Producción diaria objetivo", value: "500 cajas", icon: <Package className="w-5 h-5 text-primary" /> },
    { label: "Días laborables por mes", value: "20", icon: <Package className="w-5 h-5 text-primary" /> },
  ]

  const leadTimesData = [
    { componente: "Caja de Vino", leadTime: "1 semana", loteMinimo: "2,500 unidades", stockSeguridad: "10,000 unidades", icon: <Package className="w-5 h-5" /> },
    { componente: "Caja Tetra Pak", leadTime: "2 semanas", loteMinimo: "5,000 unidades", stockSeguridad: "5,000 unidades", icon: <Package className="w-5 h-5" /> },
    { componente: "Tapón de rosca", leadTime: "3 semanas", loteMinimo: "10,000 unidades", stockSeguridad: "6,000 unidades", icon: <Droplet className="w-5 h-5" /> },
    { componente: "Vino", leadTime: "4 semanas", loteMinimo: "2,500 litros", stockSeguridad: "3,000 litros", icon: <Wine className="w-5 h-5" /> },
    { componente: "Uvas", leadTime: "1 semana*", loteMinimo: "10,000 kg", stockSeguridad: "15,000 kg", icon: <Grape className="w-5 h-5" /> },
  ]

  const costosData = [
    { componente: "Caja de Vino", costoUnitario: 1.54, costoAlmacenamiento: 0.15, costoPedido: 50 },
    { componente: "Caja Tetra Pak", costoUnitario: 0.50, costoAlmacenamiento: 0.05, costoPedido: 30 },
    { componente: "Tapón de rosca", costoUnitario: 0.10, costoAlmacenamiento: 0.01, costoPedido: 20 },
    { componente: "Vino", costoUnitario: 0.79, costoAlmacenamiento: 0.08, costoPedido: 100 },
    { componente: "Uvas", costoUnitario: 0.20, costoAlmacenamiento: 0.02, costoPedido: 150 },
  ]

  const mrpData = [
    { periodo: 1, necesidadesBrutas: 2500, stockInicial: 10000, necesidadesNetas: 0, pedidosPlanificados: 0, stockFinal: 7500, costoInventario: 1125 },
    { periodo: 2, necesidadesBrutas: 2500, stockInicial: 7500, necesidadesNetas: 0, pedidosPlanificados: 0, stockFinal: 5000, costoInventario: 750 },
    { periodo: 3, necesidadesBrutas: 2500, stockInicial: 5000, necesidadesNetas: 0, pedidosPlanificados: 2500, stockFinal: 2500, costoInventario: 375 },
    { periodo: 4, necesidadesBrutas: 2500, stockInicial: 2500, necesidadesNetas: 2500, pedidosPlanificados: 2500, stockFinal: 2500, costoInventario: 375 },
    { periodo: 5, necesidadesBrutas: 2500, stockInicial: 2500, necesidadesNetas: 2500, pedidosPlanificados: 2500, stockFinal: 2500, costoInventario: 375 },
    { periodo: 6, necesidadesBrutas: 2500, stockInicial: 2500, necesidadesNetas: 2500, pedidosPlanificados: 2500, stockFinal: 2500, costoInventario: 375 },
    { periodo: 8, necesidadesBrutas: 2500, stockInicial: 2500, necesidadesNetas: 2500, pedidosPlanificados: 2500, stockFinal: 2500, costoInventario: 375 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      className="container mx-auto p-4 space-y-6 bg-gradient-to-br from-gray-50 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center text-primary"
        variants={itemVariants}
      >
        Planificación de Requerimientos de Materiales (MRP) - Don Dosco
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-primary/10">
              <CardTitle className="text-primary flex items-center">
                <Package className="w-6 h-6 mr-2" />
                Información General
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {generalInfo.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center space-x-2"
                    variants={itemVariants}
                  >
                    {item.icon}
                    <span className="font-semibold">{item.label}:</span>
                    <span>{item.value}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-primary/10">
              <CardTitle className="text-primary flex items-center">
                <Wine className="w-6 h-6 mr-2" />
                Estructura del Producto (BOM)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex items-center mb-2">
                  <Package className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Caja de Vino (1 unidad)</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <Package className="w-4 h-4 mr-2" />
                    <span>Caja Tetra Pak (1 unidad)</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <Droplet className="w-4 h-4 mr-2" />
                    <span>Tapón de rosca (1 unidad)</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <Wine className="w-4 h-4 mr-2" />
                    <span>Vino (1 litro)</span>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <ArrowDown className="w-4 h-4 mr-2" />
                      <Grape className="w-4 h-4 mr-2" />
                      <span>Uvas (4 kg)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-primary flex items-center">
              <Package className="w-6 h-6 mr-2" />
              Lead Times y Tamaños de Lote
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Componente</TableHead>
                  <TableHead>Lead Time</TableHead>
                  <TableHead>Tamaño de Lote Mínimo</TableHead>
                  <TableHead>Stock de Seguridad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leadTimesData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.componente}</span>
                    </TableCell>
                    <TableCell>{item.leadTime}</TableCell>
                    <TableCell>{item.loteMinimo}</TableCell>
                    <TableCell>{item.stockSeguridad}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-primary flex items-center">
              <Package className="w-6 h-6 mr-2" />
              Costos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Componente</TableHead>
                  <TableHead>Costo Unitario (USD)</TableHead>
                  <TableHead>Costo de Almacenamiento (USD/unidad/mes)</TableHead>
                  <TableHead>Costo de Pedido (USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costosData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.componente}</TableCell>
                    <TableCell>{item.costoUnitario.toFixed(2)}</TableCell>
                    <TableCell>{item.costoAlmacenamiento.toFixed(2)}</TableCell>
                    <TableCell>{item.costoPedido}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Tabs 
          defaultValue="tabla" 
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tabla">Tabla MRP</TabsTrigger>
            <TabsTrigger value="grafico">Gráfico MRP</TabsTrigger>
          </TabsList>
          <TabsContent value="tabla">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-primary flex items-center">
                  <Package className="w-6 h-6 mr-2" />
                  MRP - Caja de Vino (Producto Final)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Periodo (Semanas)</TableHead>
                      <TableHead>Necesidades Brutas</TableHead>
                      <TableHead>Stock Inicial</TableHead>
                      <TableHead>Necesidades Netas</TableHead>
                      <TableHead>Pedidos Planificados</TableHead>
                      <TableHead>Stock Final</TableHead>
                      <TableHead>Costo de Inventario</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mrpData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.periodo}</TableCell>
                        <TableCell>{item.necesidadesBrutas}</TableCell>
                        <TableCell>{item.stockInicial}</TableCell>
                        <TableCell>{item.necesidadesNetas}</TableCell>
                        <TableCell>{item.pedidosPlanificados}</TableCell>
                        <TableCell>{item.stockFinal}</TableCell>
                        <TableCell>{item.costoInventario}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="grafico">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-primary flex items-center">
                  <Package className="w-6 h-6 mr-2" />
                  Gráfico MRP - Caja de Vino
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={mrpData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="periodo" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="necesidadesBrutas" 
                      stroke="#8884d8" 
                      name="Necesidades Brutas"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="stockFinal" 
                      stroke="#82ca9d" 
                      name="Stock Final"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="pedidosPlanificados" 
                      stroke="#ffc658" 
                      name="Pedidos Planificados"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

export default MRPPlanillaAnimada

