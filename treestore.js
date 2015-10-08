#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("TreeStore");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let treestore = new Gtk.TreeStore();
treestore.set_column_types([GObject.TYPE_STRING]);

let treeiter = treestore.append(null);
treestore.set(treeiter, [0], ["English"]);
let treeiter2 = treestore.append(treeiter, treeiter2);
treestore.set(treeiter2, [0], ["James Davis"]);
let treeiter3 = treestore.append(treeiter, treeiter3);
treestore.set(treeiter3, [0], ["Mark Williams"]);

let treeiter = treestore.append(null);
treestore.set(treeiter, [0], ["Science"]);
let treeiter2 = treestore.append(treeiter, treeiter2);
treestore.set(treeiter2, [0], ["Bethany Scholes"]);

let cellrenderertext = new Gtk.CellRendererText();
let treeview = new Gtk.TreeView();
treeview.set_headers_visible(false);
treeview.set_model(treestore);
window.add(treeview);

let treeviewcolumn = new Gtk.TreeViewColumn();
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 0);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
