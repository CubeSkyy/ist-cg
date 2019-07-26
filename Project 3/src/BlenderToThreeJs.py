import bpy
import bmesh

me = bpy.context.object.data


# Get a BMesh representation
bm = bmesh.new()   # create an empty BMesh
bm.from_mesh(me)   # fill it in from a Mesh



print("let geo = new THREE.Geometry();\n")
print("geo.normalsNeedUpdate = true;\n")
print("let mat = new THREE.MeshPhongMaterial({color: 0xFFFFFF});")
print("mat.shininess = 30;\n")
print("mat.shading = THREE.SmoothShading;\n")
print("mat.needsUpdate = true;\n")
print("\n")

i = 0

for v in bm.verts:
    #x = str(v.co.x)
    #y = str(v.co.y )
    #z = str(v.co.z )
    x = str(round(v.co.x * 10,2))
    y = str(round(v.co.z * 10,2))
    z = str(round(v.co.y * -10,2))
    print("let v" + str(i) + " = new THREE.Vector3(" + x + ", " + y + ", " + z + ");")
    i += 1

print("\n")
i=0
for v in bm.verts:
    print("geo.vertices.push(v" + str(i) +");")

    i += 1

print("\n")

for f in bm.faces:
    if len(f.verts) == 4:
        v0 = f.verts[0].index
        v1 = f.verts[1].index
        v2 = f.verts[2].index
        v3 = f.verts[3].index

        print("geo.faces.push( new THREE.Face3("+ str(v0)+ ", " + str(v1) + ", " + str(v2)+ "));")
        print("geo.faces.push( new THREE.Face3("+ str(v2)+ ", " + str(v3) + ", " + str(v0)+ "));")
    elif len(f.verts) == 3 :
        v0 = f.verts[0].index
        v1 = f.verts[1].index
        v2 = f.verts[2].index
        print("geo.faces.push( new THREE.Face3("+ str(v0)+ ", " + str(v1) + ", " + str(v2)+ "));")

print("\ngeo.computeFaceNormals();")
print("\nlet obj = new THREE.Mesh(geo,mat);")
print("\nthis.add(obj);")
